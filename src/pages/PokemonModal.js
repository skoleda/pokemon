import {Avatar, Modal} from "antd";
import {UserOutlined} from "@ant-design/icons";

<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    {cardPokemon && <div>
                        <Avatar src={`${cardPokemon.sprites.front_default}`} shape="square" size={120}
                                icon={<UserOutlined/>}/>
                    </div>}
                    {cardPokemon && <p>Name: {cardPokemon.name}</p>}
                    {cardPokemon &&
                    <p>Abilities: {cardPokemon.abilities.map((element) => element.ability).map(e => (e.name + '; '))}</p>}
                    <p>Base Stats:</p>
                    {cardPokemon &&
                    <p> {cardPokemon.stats.map((element) => element.stat).map((e, id) => (` ${e.name}:  ${cardPokemon.stats[id].base_stat}`))}</p>}
                    {cardPokemon &&
                    <p>Type Pokemon: {cardPokemon.types.map((element) => element.type).map(e => (`${e.name}; `))}</p>}
                </Modal>