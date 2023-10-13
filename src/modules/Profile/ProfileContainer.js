/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from 'store/API/userApi';
import { Loader } from 'components';
import AlertMessage from 'utils/AlertMessage';
import ResponseHandler from 'utils/ResponseHandler';

const ProfileContainer = () => {
  const { data, refetch, isLoading } = useGetUserProfileQuery();
  const [updateUserProfile, { isLoading: updateLoading }] = useUpdateUserProfileMutation();
  const defaultValues = {
    profile: '',
    company: '',
    email: '',
    firstName: '',
    lastName: '',
    primaryContact: '',
    secondaryContact: '',
    title: ''
  };
  const [userData, setUserData] = useState(defaultValues);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(defaultValues);

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl({ photoBase64: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const updateProfile = async (values) => {
    try {
      const formData = new FormData();
      formData.append('photo', image);
      formData.append('company', values.company);
      formData.append('email', values.email);
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('primaryContact', values.primaryContact);
      formData.append('secondaryContact', values.secondaryContact);
      formData.append('title', values.title);
      const updateData = await updateUserProfile(formData);
      if (updateData?.data && updateData?.data?.status) {
        ResponseHandler(updateData, close);
      }
    } catch (error) {
      AlertMessage(error, 'error');
    }
  };

  useEffect(() => {
    if (data) {
      if (data?.status) {
        const { photoBase64, company, email, firstName, lastName, primaryContact, secondaryContact, title } =
          data?.data;
        setUserData({
          company: company || '',
          email: email || '',
          firstName: firstName || '',
          lastName: lastName || '',
          primaryContact: primaryContact || '',
          secondaryContact: secondaryContact || '',
          title: title || ''
        });
        setPreviewUrl({
          photoBase64: `data:image/jpeg;base64,${photoBase64 || ''}`          
        });
      } else {
        setUserData({ defaultValues });
      }
    }
  }, [data]);

  return (
    <>
      {data && (
        <Profile
          initialValues={userData}
          updateProfile={updateProfile}
          handleImageChange={handleImageChange}
          image={image}
          previewUrl={previewUrl}
        />
      )}
      {(isLoading || updateLoading) && <Loader />}
    </>
  );
};

export default ProfileContainer;
