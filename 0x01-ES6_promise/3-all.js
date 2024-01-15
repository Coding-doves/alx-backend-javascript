import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([response]) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[0].lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
export default handleProfileSignup;
