import { useState, useRef } from 'react';
import { UserHooks } from '../hooks/UsersHooks';

const CreateUser = () => {
  const { users, setUsers } = UserHooks();
  const [formData, setFormData] = useState({});
  const imageInputRef = useRef(null);

  const handleAddUsers = e => {
    e.preventDefault();

    const newId =
      users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser = {
      id: newId,
      userName: formData.name,
      image: formData.image,
    };
    setFormData({});
    imageInputRef.current.value = '';
    setUsers(prev => [...prev, newUser]);
  };

  const handleChange = e => {
    const newValue =
      e.target.name === 'image'
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: newValue,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleAddUsers}
        className="bg-transparent p-6 mx-auto shadow-2xl shadow-indigo-500/50 rounded-xl w-full flex flex-col"
      >
        <h1 className="text-center font-sans text-2xl font-bold uppercase text-indigo-600">
          Create User
        </h1>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="bg-transparent py-2 border-b-4 border-indigo-500 my-3 outline-none placeholder:text-black"
        />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleChange}
          ref={imageInputRef}
          className="bg-transparent py-2 border-b-4 border-indigo-500 my-3 outline-none"
        />
        <input
          type="submit"
          value="Submit"
          className="py-2 px-4 mt-5 bg-indigo-600 text-white inline-block rounded-md hover:bg-indigo-500 cursor-pointer outline-none"
        />
      </form>
    </div>
  );
};

export default CreateUser;
