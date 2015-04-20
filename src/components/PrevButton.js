import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PrevIconSVG } from './Icons';

let { PropTypes } = React;

class PrevButton extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    handleClick() {
        let { soundCloudAudio, onPrevClick } = this.props;

        soundCloudAudio && soundCloudAudio.previous();
        onPrevClick && onPrevClick.call(this);
    }

    render() {
        let { className } = this.props;

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button className={classNames} onClick={this.handleClick.bind(this)}>
                <PrevIconSVG />
            </button>
        );
    }
}

PrevButton.propTypes = {
    className: PropTypes.string,
    onPrevClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default PrevButton;
