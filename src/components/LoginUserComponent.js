import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store.js';
import { getError } from '../utils.js';

export default function LoginUserComponent() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {search} = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo} = state

  const loginSubmitHandler = async (e) => {
    e.preventDefault()
    try{
        const {data} = await axios.post('/api/users/signin', {
            username,
            password
        })
        ctxDispatch({type: 'USER_SIGNIN', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/dashboardscreen')
    }
    catch(err){
        toast.error(getError(err))
    }
  };
  return (
    <div>
      <form className="text-gray-500" onSubmit={loginSubmitHandler}>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="username"
          >
            Username
            <span className="medium-text">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
            name="username"
            type="text"
          />
        </div>
        <div className="flex flex-col text-sm gap-3 py-4">
          <label
            className="flex flex-row gap-0.5 font-semibold"
            htmlFor="password"
          >
            Password
            <span className="medium-text">
              <FaStarOfLife />
            </span>
          </label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-main2-color"
            name="password"
            type="password"
          />
        </div>
        <div className="py-4">
          <button
            type="submit"
            className="bg-main-color text-white text-sm font-bold px-4 rounded py-2 hover:bg-main2-color duration-500"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
