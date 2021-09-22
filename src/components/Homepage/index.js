// == Import composants
import Card from 'src/components/Card';
import data from 'src/data';

// == Import persos
import './style.scss';

const Homepage = () => (
  <div className="homepage">
    <img
      src="https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Illustration"
      className="homepage__background"
    />
    <div className="homepage__welcome">
      <h2>Bienvenue sur High Riders</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lacus sit amet
        felis rutrum sodales sed eget est. Praesent consequat, eros in blandit pulvinar,
        lorem magna tincidunt augue, at volutpat tortor ligula ac augue.
      </p>
    </div>
    <div className="homepage__cards">
      <div className="homepage__list">
        <h1>Derniers évènements</h1>
        <div className="homepage__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="homepage__list">
        <h1>Meilleurs spots</h1>
        <div className="homepage__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="homepage__list">
        <h1>Derniers spots ajoutés</h1>
        <div className="homepage__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
