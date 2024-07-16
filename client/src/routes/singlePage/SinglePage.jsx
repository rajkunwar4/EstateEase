import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const post = useLoaderData();
  console.log(post);

  return (
    <div className="singlePage">
      {/* left side */}
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">${post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="features">
        <div className="wrapper">
          <p className="title ">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{post.postDetail.utilities} is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets {post.postDetail.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="./fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>
                  Must have {post.postDetail.income} the rent in total household
                  income
                </p>
              </div>
            </div>
          </div>
          <p className="title ">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./size.png" alt="" />
              <span>{post.postDetail.size}sqft</span>
            </div>
            <div className="size">
              <img src="./bed.png" alt="" />
              <span>{post.bedroom} bed</span>
            </div>
            <div className="size">
              <img src="./bath.png" alt="" />
              <span>{post.bathroom} Bathroom</span>
            </div>
          </div>
          <p className="title ">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="./school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="./restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title ">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="./save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
