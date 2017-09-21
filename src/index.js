import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }

    return <h1>Hello, Stranger.</h1>
}

const user = {
    firstName: 'Guillaume',
    lastName: 'Lebeau',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/2910740?v=4&u=2ffd5540cdb3d888518eebc171f55177a66db921&s=400'
};

const userAvatarElement = <img src={user.avatarUrl} alt="avatar"></img>;

const element = (
    <section>
        <div>
            {getGreeting(user)}
        </div>
        <div>
            {userAvatarElement}
        </div>
    </section>
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// registerServiceWorker();
