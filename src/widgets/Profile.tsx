import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
// import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';

// import asBase64Image from '../blocks/imagebase64.block';

import * as css from './styles/Profile.m.css';

export interface ProfileProperties {
	username: string;
}

export default class Profile extends WidgetBase<ProfileProperties> {
	protected render() {
		const { username } = this.properties;
		// const imageNodes = this.meta(Block).run(asBase64Image)('../../images/sally.jpg');
		return (
			<div>
				<h1 classes={css.root}>Welcome {username}</h1>
			</div>
		);
	}
}
