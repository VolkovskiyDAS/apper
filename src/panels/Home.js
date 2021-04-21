import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import logo from '../img/logo.png';
import d1 from '../img/1.jpg';
import d2 from '../img/2.jpg';
import d3 from '../img/3.jpg';
import d4 from '../img/4.jpg';
import d5 from '../img/5.jpg';
import d6 from '../img/6.jpg';
import d7 from '../img/7.jpg';
import d8 from '../img/8.jpg';
import d9 from '../img/9.jpg';
import './main.css';

const Home = ({ id, go, fetchedUser }) => (
	<div className="main">
        <div className="header">
          <img src="{logo}" className="logo" />
        </div>
        <div className="lined" />
        <div className="container">
          <div className="info">
            <a href="https://gdz.ru/class-9/algebra/makarichev-14/#media-33" className="link" target="blank_">
              <img src="{d1}" className="book" />
            </a>
            <a href="https://gdz.ru/class-7/geometria/atanasyan-7-9/#media-33" className="link" target="blank_">
              <img src="{d2}" className="book" />
            </a>
            <a href="https://gdz.ru/class-9/biologiya/ponomareva/#media-33" className="link" target="blank_">
              <img src="{d3}" className="book" />
            </a>
            <a href="https://megaresheba.ru/index/06/0-371/#media-16" className="link" target="blank_">
              <img src="{d4}" className="book" />
            </a>
            <a href="https://www.euroki.org/gdz/ru/fizika/9_klass/testy-po-fizike-9-klass-fgos-gromtseva-k-uchebniku-peryshkina-348/#search" className="link" target="blank_">
              <img src="{5}" className="book" />
            </a>
            <a href="https://megaresheba.ru/index/06/0-343/#media-16" className="link" target="blank_">
              <img src="{d6}" className="book" />
            </a>
            <a href="https://reshutka.ru/9klass/obshchestvoznanie/bogolyubov/" className="link" target="blank_">
              <img src="{d7}" className="book" />
            </a>
            <a href="https://megaresheba.ru/gdz/himiya/9-klass/rudzitis/#media-16" className="link" target="blank_">
              <img src="{d8}" className="book" />
            </a>
            <a href="https://reshak.ru/reshebniki/informatika/9/bosova_uchebnik/index.html" className="link" target="blank_">
              <img src="{d9}" className="book" />
            </a>
          </div>
        </div>
      </div>
);
export default Home;
