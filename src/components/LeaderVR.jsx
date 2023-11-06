import LeadImg from "../images/desktop/image-interactive.jpg";

const LeaderVR = () => {
  return (
    <div className="container">
    <div className="row py-3 py-md-5 justify-content-center align-items-center">
        <div className="col-md-6">
          <img src={LeadImg} alt="" className="w-100" />
        </div>
        <div className="col-md-6 p-md-5 p-1">
          <h3>The leader in interactive VR</h3>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderVR;
