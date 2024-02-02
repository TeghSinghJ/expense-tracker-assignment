import React, { useEffect, useState } from 'react';
import MembersList from './MembersList';
import GroupList from './GroupList';

const GroupComponent = () => {
  const [members, setMembers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', relation: '' });
  const [selectedGroupName, setSelectedGroupName] = useState('');

  useEffect(() => {
    fetchMembers();
    fetchGroups();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/members/');
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/groups/');
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const handleAddMember = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/members/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        fetchMembers();
        setNewMember({ name: '', relation: '' });
      } else {
        console.error('Error adding member:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const handleRemoveMember = async (memberId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/members/remove/${memberId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchMembers();
      } else {
        console.error('Error removing member:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing member:', error);
    }
  };

  const handleMemberSelection = (memberId) => {
    const isSelected = selectedMembers.includes(memberId);

    if (isSelected) {
      setSelectedMembers((prevSelectedMembers) =>
        prevSelectedMembers.filter((id) => id !== memberId)
      );
    } else {
      setSelectedMembers((prevSelectedMembers) => [...prevSelectedMembers, memberId]);
    }
  };

  const handleAddGroup = async () => {
    try {
      const defaultGroupName = 'Group-';

      const response = await fetch('http://localhost:8080/api/groups/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupName: selectedGroupName || defaultGroupName,
          memberIds: selectedMembers,
        }),
      });

      if (response.ok) {
        fetchGroups();
        setSelectedMembers([]);
        setSelectedGroupName('');
      } else {
        console.error('Error adding group:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding group:', error);
    }
  };

  return (
    <div className="container my-3 ">
      <div className="container my-3 ">
        <div className="row">
          <div className="col-md-7">
            <h2>Members</h2>
          </div>
          <div className="col text-end">
            <div className="justify-content-end">
              <button type="button" className="btn btn-primary" onClick={handleAddGroup}>
                <i className="bi bi-person-add mx-2"></i>Create Group
              </button>
            </div>
          </div>
          <div className="col">
            <div className="text-start">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMemberForm">
                <i className="bi bi-person-add mx-2"></i>Add Member
              </button>
            </div>
          </div>
        </div>
        <MembersList
          members={members}
          handleRemoveMember={handleRemoveMember}
          handleMemberSelection={handleMemberSelection}
        />
      </div>

      <div className="container my-3">
      <h2 className='dispay-1 my-3'>My groups</h2>

        <GroupList groups={groups} />
      </div>

      <div className="modal fade" id="addMemberForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Member
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="member-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member-name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="member-relation" className="col-form-label">
                    Relation:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="member-relation"
                    value={newMember.relation}
                    onChange={(e) => setNewMember({ ...newMember, relation: e.target.value })}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAddMember} data-bs-dismiss="modal">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
