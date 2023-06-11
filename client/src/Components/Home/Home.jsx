import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import "./Home.scss";
import { BsDot } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/Users/UserAPI";


const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const handleLogout = async () => {
    dispatch(userLogout());
  };



  return (
    <div>
      <TopBar />

      <div className="home-container">
        <div className="home-wraper">
          <div className="time-line">
            

            {/* ========================================== */}

            <div className="body-top mt-4">
              <div className="card">
                <div className="card-body d-flex">
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/farin.jpg" alt="" />
                    </div>
                    <p>Emma</p>
                  </div>
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/farin2.jpg" alt="" />
                    </div>
                    <p>Wonda</p>
                  </div>
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/sajib.jpg" alt="" />
                    </div>
                    <p>md_sajib</p>
                  </div>
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/clarck_kent.webp" alt="" />
                    </div>
                    <p>clarck_kent</p>
                  </div>
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/harley quinn.png" alt="" />
                    </div>
                    <p>harley_quinn</p>
                  </div>
                  <div className="story-area">
                    <div className="image-area">
                      <img src="./assects/images/iron_man.jpg" alt="" />
                    </div>
                    <p>iron_man</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================== */}

            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKJXcH51EHISFcfmW-Oux-SbU6GQt9qDi24r1pkutm4-0xrZOJeDNTeteeRuSwRhRy_Q&usqp=CAU"
                    alt=""
                  />
                  <div className="user-details">
                    <a className="user-name" href="!#">
                      Asraful Haque
                    </a>
                    <span className="location">Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button>
                    <svg
                      aria-label="More options"
                      className="_ab6-"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="post-image">
                <img
                  src="https://wallpaperaccess.com/full/1700222.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-icons">
                <div className="icons-left">
                  <a href="!#">
                    <svg
                      aria-label="Like"
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>
                  </a>

                  <a href="!#">
                    <svg
                      aria-label="Comment"
                      className="_ab6-"
                      color="#333"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </a>

                  <a href="!#">
                    <svg
                      aria-label="Share Post"
                      className="_ab6-"
                      color="#333"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </a>
                </div>
                <div className="icon-right">
                  <a href="!#">
                    <svg
                      aria-label="Save"
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="post-details">
                <span className="likes">102 Likes</span>
                <div className="post-content">
                  <a href="!#">Asraful Haque</a> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quo repellendus adipisci
                  excepturi odit voluptatibus tempora nihil tempore. Autem, hic
                  quasi.
                </div>
                <div className="post-comments">
                  <span>View all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 day ago</span>
                </div>
              </div>

              <div className="post-comments-area">
                <a href="!#">
                  <svg
                    aria-label="Emoji"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </a>

                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>

            <div className="post-card">
              <div className="post-card-header">
                <div className="post-user-info">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKJXcH51EHISFcfmW-Oux-SbU6GQt9qDi24r1pkutm4-0xrZOJeDNTeteeRuSwRhRy_Q&usqp=CAU"
                    alt=""
                  />
                  <div className="user-details">
                    <a className="user-name" href="!#">
                      Asraful Haque
                    </a>
                    <span className="location">Dhaka</span>
                  </div>
                </div>
                <div className="post-opt-btn">
                  <button>
                    <svg
                      aria-label="More options"
                      className="_ab6-"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="post-image">
                <img
                  src="https://wallpaperaccess.com/full/1700222.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-icons">
                <div className="icons-left">
                  <a href="!#">
                    <svg
                      aria-label="Like"
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>
                  </a>

                  <a href="!#">
                    <svg
                      aria-label="Comment"
                      className="_ab6-"
                      color="#333"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </a>

                  <a href="!#">
                    <svg
                      aria-label="Share Post"
                      className="_ab6-"
                      color="#333"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </a>
                </div>
                <div className="icon-right">
                  <a href="!#">
                    <svg
                      aria-label="Save"
                      className="_ab6-"
                      color="#8e8e8e"
                      fill="#333"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="post-details">
                <span className="likes">102 Likes</span>
                <div className="post-content">
                  <a href="!#">Asraful Haque</a> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quo repellendus adipisci
                  excepturi odit voluptatibus tempora nihil tempore. Autem, hic
                  quasi.
                </div>
                <div className="post-comments">
                  <span>View all 23 comments</span>
                </div>
                <div className="post-time">
                  <span>1 day ago</span>
                </div>
              </div>

              <div className="post-comments-area">
                <a href="!#">
                  <svg
                    aria-label="Emoji"
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                  </svg>
                </a>

                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="user-info">
            <div className="main-user ">
              <div className="details">
                <div className="img-area">
                  <Link to={"/profile"}>
                    <img
                      src="https://images.indianexpress.com/2023/04/shah-rukh-khan.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="user-name">
                  <Link style={{ textDecoration: "none" }} to={"/profile"}>
                    <p>{users.username}</p>
                  </Link>
                  <span>{users.name}</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <Link onClick={handleLogout}>Log Out</Link>
              </div>
            </div>

            <div className="suggest-area">
              <span>Suggested for you</span>
              <a>See All</a>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://art.pixilart.com/6f3043a19d2f43a.png"
                    alt="logo"
                  />
                </div>
                <div className="user-name">
                  <p>_aesthetic._kiddo_</p>
                  <span>suggest for you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://storage.googleapis.com/ares-profile-pictures/hd/ui.ux_daily-e0d41eb9b6e2761202de5cda4ee00d39_hd.jpg"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>ui.ux_daily</p>
                  <span>suggest for you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://pbs.twimg.com/profile_images/1641374480638398465/kGkNBE9C_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>theraktimnath</p>
                  <span>suggest for you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://cdna.artstation.com/p/assets/images/images/016/968/914/large/muhammx-ridho-laa-tahzan.jpg?1554156896"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>auhid7897</p>
                  <span>suggest for you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://yt3.googleusercontent.com/R8pAnPtkt0HWIVjl7F01EwaMpXWukKI6oPV9K7PxfYEkZAm8FXKQ13-iucwrWIEG8C74zcFPdA=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>malewiczhype</p>
                  <span>suggest for you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://1.bp.blogspot.com/-1EpCofurP_c/YNXxXpySYhI/AAAAAAAAGjQ/P6m0NCqJMj8iiJAuMcLZReDHwIJdaTJCQCLcBGAsYHQ/s801/Dipika%2BRana.jpg"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>dipikarana_9710</p>
                  <span>followed you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="suggest-user">
              <div className="details">
                <div className="img-area">
                  <img
                    src="https://pbs.twimg.com/media/D4Dl6uWXkAAv_6g.jpg"
                    alt=""
                  />
                </div>
                <div className="user-name">
                  <p>mirvat.abuallan</p>
                  <span>followed you</span>
                </div>
              </div>
              <div className="switch-to-profile">
                <a href="">Follow</a>
              </div>
            </div>

            <div className="menu-area">
              <ul>
                <li>
                  <a href="!#">About</a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot />
                    Help
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Press
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> API
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Jobs
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Privacy
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Terms
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Locations
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <BsDot /> Language
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="!#">
                    <BsDot /> Meta Verified
                  </a>
                </li>
              </ul>
            </div>

            <div className="copyright-area">
              <span>© 2023 INSTAGRAM FROM META</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
