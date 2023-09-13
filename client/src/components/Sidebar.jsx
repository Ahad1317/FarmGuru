import '../App.css'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THE SCIENTIST</span>
        <img className="doctor"
          src="https://images.squarespace-cdn.com/content/v1/5e4708107afd5675c0e2a2fb/1581834199925-JF9N0CJ4OI0YCYM3QHKQ/1.png?format=1500w"
          alt=""
        />
        <p className="desc">
          Dr. Prabakaran is well certified professional in his field, with a 10+ year of experience in the field of farming science and agriculture.
        </p>
        <ul className="sidebarList">
          <li className="sidebarListItem">Name :</li>
          <li className="sidebarListItem">Dr. Prabakaran</li>
          <li className="sidebarListItem">Age :</li>
          <li className="sidebarListItem">47</li>
          <li className="sidebarListItem">Contact :</li>
          <li className="sidebarListItem">+91-98989898</li>
        </ul>
        <img className="doctor"
          src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=2048x2048&w=is&k=20&c=XPrBnWXPZ6APj1L9r768W1TWpZl4s3T9mMzwmPDGp4s="
          alt=""
        />
        <p className="desc">
          Dr. Savaridassan is well certified professional in his field, with a 10+ year of experience in the field of farming science and agriculture.
        </p>
        <ul className="sidebarList">
          <li className="sidebarListItem">Name :</li>
          <li className="sidebarListItem">Dr. Savaridassan</li>
          <li className="sidebarListItem">Age :</li>
          <li className="sidebarListItem">51</li>
          <li className="sidebarListItem">Contact :</li>
          <li className="sidebarListItem">+91-983483779</li>
        </ul>
        <img className="doctor"
          src="https://thumbs.dreamstime.com/z/indian-female-medical-doctor-portrait-uniform-hand-holding-test-report-standing-white-background-81003009.jpg?w=992"
          alt=""
        />
        <p className="desc">
          Dr. Anyarkanni is well certified professional in his field, with a 10+ year of experience in the field of farming science and agriculture.
        </p>
        <ul className="sidebarList">
          <li className="sidebarListItem">Name :</li>
          <li className="sidebarListItem">Dr. Anyarkanni</li>
          <li className="sidebarListItem">Age :</li>
          <li className="sidebarListItem">32</li>
          <li className="sidebarListItem">Contact :</li>
          <li className="sidebarListItem">+91-989347473</li>
        </ul>
      </div>
    </div>
  );
}