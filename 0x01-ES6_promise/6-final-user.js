import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((output) => {
      if (output[0].status === 'fulfilled' && output[1].status === 'fulfilled') {
        const { firstName, lastName } = output[0].value;
        return [firstName, lastName, output[1].value];
      }
      return;
    });
}
