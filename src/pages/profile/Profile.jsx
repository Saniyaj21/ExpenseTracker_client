import "./Profile.css";
const Profile = () => {
	return (
		<div className='profile-container'>
			<div className='profile-pic'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-N1IRXUY9Qp775EJ9MHY6us0IQGDmWFmHA&s'
					alt=''
				/>
			</div>
      <div className="info">
        <h2>Maloti Lotika</h2>
        <p>lotika@papakipari.com</p>
      </div>
		</div>
	);
};

export default Profile;
