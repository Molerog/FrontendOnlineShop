import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserState";
import "../Profile/Profile.scss";
import $ from "jquery";
import { Empty } from 'antd';
const picture =
  "https://i0.wp.com/www.followchain.org/wp-content/uploads/2022/03/good-tiktok-profile-picture-15-1.jpg?resize=256%2C256&ssl=1";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }
$(".info dd").each(function () {
  $(this).css({ width: $(this).text() + "%" });
});
  const orderList = user.user.Orders.map((element) => {
    
    return (
      <div className="TicketContainer" key={element.id}>
        <h4>Pedido con fecha: {element.date.split("T")[0]}</h4>
        <span className="ProductsContainer">
          {element.Products.map((product) => {
            return <div className="ProductContainer">{product.product}</div>;
          })}
        </span>
        <div className="TotalContainer">
          <p>Cantidad total de productos: {element.Products.length}</p>
        </div>
      </div>
    );
  });

  if (orderList.length === 0) {
    return (
      <div className="GeneralContainer">
        <section className="card">
          <figure className="panel meta">
            <picture>
              <img className="avatar" src={picture} width="128" height="128" />
              <img
                className="company-logo"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67516/b-01.png"
                alt="BigglesCodes"
                width="40"
                height="40"
              />
            </picture>
            <figcaption>
              <h1 className="name">{user.user.name}</h1>
              <h3 className="title">{user.user.email}</h3>
            </figcaption>
          </figure>

          <div className="panel info">
            <dl className="skillz">
              <dt>Rock</dt>
              <dd>98</dd>
              <dt>New-Wave</dt>
              <dd>86</dd>
              <dt>Alternative</dt>
              <dd>28</dd>
              <dt>Techno</dt>
              <dd>32</dd>
            </dl>

            <ul className="social">
              <li>
                <a
                  className="icon-social-twitter"
                  href="https://twitter.com/bigglesrocks"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="icon-social-github"
                  href="https://github.com/bigglesrocks"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="icon-social-stack-overflow"
                  href="http://stackoverflow.com/users/664904/biggles"
                >
                  StackOverflow
                </a>
              </li>
              <li>
                <a
                  className="icon-social-dribbble"
                  href="https://dribbble.com/biggles"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="OrdersContainer">
          <div className="TicketsContainer">
            <span><Empty /></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="GeneralContainer">
      <section className="card">
        <figure className="panel meta">
          <picture>
            <img className="avatar" src={picture} width="128" height="128" />
            <img
              className="company-logo"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/67516/b-01.png"
              alt="BigglesCodes"
              width="40"
              height="40"
            />
          </picture>
          <figcaption>
            <h1 className="name">{user.user.name}</h1>
            <h3 className="title">{user.user.email}</h3>
          </figcaption>
        </figure>

        <div className="panel info">
          <dl className="skillz">
            <dt>Rock</dt>
            <dd>98</dd>
            <dt>New-Wave</dt>
            <dd>86</dd>
            <dt>Alternative</dt>
            <dd>28</dd>
            <dt>Techno</dt>
            <dd>32</dd>
          </dl>

          <ul className="social">
            <li>
              <a
                className="icon-social-twitter"
                href="https://twitter.com/bigglesrocks"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="icon-social-github"
                href="https://github.com/bigglesrocks"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="icon-social-stack-overflow"
                href="http://stackoverflow.com/users/664904/biggles"
              >
                StackOverflow
              </a>
            </li>
            <li>
              <a
                className="icon-social-dribbble"
                href="https://dribbble.com/biggles"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="OrdersContainer">
        <div className="TicketsContainer">{orderList}</div>
      </div>
    </div>
  );
};

export default Profile;
