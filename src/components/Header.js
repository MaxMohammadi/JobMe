import React from "react";

class Header extends React.Component {
  // dashboard header
  dashboard_header = (
    <div>
      <h2>Hi there, {this.username}.</h2>
      <h1>Let's make some moves.</h1>
    </div>
  );

  //application log header
  application_log_header = (
    <div>
      <h1>My Applications</h1>
    </div>
  );

  // new application header
  application_new_header = (
    <div>
      <h1>Add a New Application</h1>
      <h2>You're on a roll.</h2>
    </div>
  );

  // interview log header
  interview_log_header = (
    <div>
      <h1>My Interviews</h1>
      <h2>Get that Bread.</h2>
    </div>
  );

   // profile page header
   profile_header = (
       <div>
           <h1>My Profile</h1>
       </div>
   );

   profile_edit_header = (
       <div>
           <h1>Edit My Profile</h1>
           <h2>Straight Applicant Awesomeness.</h2>
           <h3>Fields left blank won't be changed from the original.</h3>
       </div>
   )

  render() {
    const { page } = this.props;

    if (page === "Dashboard") return this.dashboard_header;
    if (page === "ApplicationLog") return this.application_log_header;
    if (page === "ApplicationNew") return this.application_new_header;
    if (page === "InterviewLog") return this.interview_log_header;
    if (page === "Profile") return this.profile_header;
    if (page === "EditProfile") return this.profile_edit_header;
    else {
      return this.dashboard_header;
    }
  }
}

export default Header;
