import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleEdit = (userId) => {
    // Edit funksiyasi
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    // Delete funksiyasi
    console.log(`Delete user with ID: ${userId}`);
  };

  const handleEditPassword = (userId) => {
    // Edit Password funksiyasi
    console.log(`Edit password for user with ID: ${userId}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error getting users:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <main>
      <div className="modal fade" id="create-user-modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5">New User</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="create-user-form">
                <div className="mb-3">
                  <label for="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    name="first-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    name="last-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="age" className="col-form-label">
                    {" "}
                    Age:{" "}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="col-form-label">
                    {" "}
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="col-form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="mb-3">
                  <label for="image" className="col-form-label">
                    {" "}
                    Image:{" "}
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="image"
                    name="image"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                id="create-user-btn"
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="edit-user-modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit User</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="edit-user-form">
                <div className="mb-3">
                  <label for="edit-first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit-first-name"
                    name="first-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="edit-last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edit-last-name"
                    name="last-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="edit-age" className="col-form-label">
                    {" "}
                    Age:{" "}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="edit-age"
                    name="age"
                  />
                </div>
                <div className="mb-3">
                  <label for="edit-email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="edit-email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label for="edit-image" className="col-form-label">
                    Image:
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="edit-image"
                    name="image"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                id="edit-user-btn"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="update-password-modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Update Password</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="alerts-wrapper"></div>
              <form id="update-password-form">
                <div className="mb-3">
                  <label for="current-password" className="col-form-label">
                    Current Password:
                  </label>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="current-password"
                      name="current-password"
                    />
                    <label for="current-password" className="show-password">
                      <span className="material-icons-outlined text-dark">
                        visibility_off
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="new-password" className="col-form-label">
                    New Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="new-password"
                    name="new-password"
                  />
                </div>
                <div className="mb-3">
                  <label for="confirm-password" className="col-form-label">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    name="confirm-password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                id="update-password-btn"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 d-flex justify-content-between align-items-center">
        <h1>Users</h1>
        <button
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#create-user-modal"
        >
          Create User
        </button>
      </div>

      <table className="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* // (komponentda render funksiyasining ichida) */}
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* Qolgan jadval o'zgarishlari */}
              <td className="align-middle">{user.id}</td>
              <td className="align-middle">
                {user.first_name} {user.last_name}
              </td>
              <td className="align-middle">
                <img className="users-img" src={`${user.image}`} alt="" />
              </td>
              <td className="align-middle">{user.age}</td>
              <td className="align-middle">{user.email}</td>
              <td className="align-middle">{user.password}</td>
              <td className="align-middle">
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(user.id)}
                >
                  <span className="material-icons-outlined fs-5"> edit </span>
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditPassword(user.id)}
                >
                  <span className="material-icons-outlined fs-5"> key </span>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  <span className="material-icons-outlined fs-5"> delete </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Users;
