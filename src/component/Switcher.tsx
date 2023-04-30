import React from 'react';

import {Options, Option, Toggle, ToggleOption, Wrapper} from './styles';
import './index.css';

const Switcher = () => {
    const changeSelectedOption = (event: { target: HTMLDivElement }) => {
        const def = document.getElementById('def');
        const nft = document.getElementById('nft');
        const option = document.getElementById('option');
        if (!def || !nft || !option) {
            return;
        }

        if (event.target.id === nft.id) {
            option.classList.remove('start');
            def.classList.remove('active');
            option.classList.add('end');
            nft.classList.add('active');
        }

        if (event.target.id === def.id) {
            option.classList.remove('end');
            nft.classList.remove('active');
            option.classList.add('start');
            def.classList.add('active');
        }
    };

    return (
        <Wrapper>
            <Options>
                <Option
                    id="def"
                    onClick={(e: { target: HTMLDivElement }) => changeSelectedOption(e)}
                    className="active"
                >
                    Default avatars
                </Option>
                <Option
                    id="nft"
                    onClick={(e: { target: HTMLDivElement }) => changeSelectedOption(e)}
                >
                    NFT avatars
                </Option>
            </Options>
            <Toggle>
                <ToggleOption id="option" className="start"/>
            </Toggle>
        </Wrapper>
    );
};

export default Switcher;
