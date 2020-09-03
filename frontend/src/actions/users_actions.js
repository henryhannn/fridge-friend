import {getUsers} from "../util/users_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const requestUsers = () => (dispatch) =>
  foodItemAPIUtil
    .getUsers()
    .then((users) => dispatch(receiveUsers(users)));


