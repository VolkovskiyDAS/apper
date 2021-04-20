import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import phot from '../img/1.jpg';
import './Home.css';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<Div className="header">автор твоей улыбки</Div>
		<h1 className="title">"АВТОР ТВОЕЙ УЛЫБКИ" — лучшая группа ВКонтакте которая поднимет тебе настроение!</h1>
		<h1 className="text">Мемы, сохры, пикчи ждут тебя в нашей группе!</h1>
		<img className="phote" src={phot}/>
		<Div></Div>
			<Div>
				<div className="ds"><a onclick='location.href="https://vk.cc/c0TYGu"' className="button">Открыть группу</a></div>
			</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
