import React from "react";

import {Avatar, Modal} from "antd";
import {UserOutlined} from "@ant-design/icons";

export const PokemonModal = ({isModalVisible, handleOk, cardPokemon, onCancel}) => {
    console.log(cardPokemon);
    return (<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={onCancel} cardPokemon>
        {cardPokemon && <>
            <div>
                <Avatar src={`${cardPokemon.sprites.front_default}`} shape="square" size={120}
                        icon={<UserOutlined/>}/>
            </div>
            <p>Name: {cardPokemon.name}</p>
            <p>Abilities: {cardPokemon.abilities.map((element) => element.ability).map(e => (e.name + '; '))}</p>
            <p>Base Stats:</p>
            <p> {cardPokemon.stats.map((element) => element.stat).map((e, id) => (` ${e.name}:  ${cardPokemon.stats[id].base_stat}`))}</p>
            <p>Type Pokemon: {cardPokemon.types.map((element) => element.type).map(e => (`${e.name}; `))}</p>
        </>}
    </Modal>)
}

// export default PokemonModal;