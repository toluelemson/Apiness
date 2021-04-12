export const createMoment = (moment) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('moment').add({
      ...moment,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_MOMENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_MOMENT_ERROR' }, err);
    });
  }
};