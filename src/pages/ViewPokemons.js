import React, {useEffect, useState} from "react";

import {CommonRow, LinkText, RowForm, TypePokemonText} from "../style/common";
import 'antd/dist/antd.css'
import {Avatar, Button, Col, Input, Table} from "antd";
import Title from "antd/es/typography/Title";
import {UserOutlined} from '@ant-design/icons';
import {isEmpty, mapValues} from 'lodash'
import api from "../api";
import {PokemonModal} from "../modal";


export const ViewPokemons = () => {
    const [loading, setLoading] = useState(false)
    const [pokemon, setPokemon] = useState();
    const [pokemonDis, setPokemonDis] = useState([]);
    const [cardPokemon, setCardPokemon] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [namePokemon, setNamePokemon] = useState('')
    const limitPokemns = 100;


    useEffect(() => {
        api
            .get(`/pokemon/?limit=${limitPokemns}`)
            .then((response) => {
                setPokemon(response.data.results)
            })
            .catch((err) => {
                alert(`Something wrong... \n ${err.message}`);
                setLoading(false)
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        if (!isEmpty(pokemon)) {
            let localArray = [];
            mapValues(pokemon, element => {
                api
                    .get(`/pokemon/${element.name}`)
                    .then((res) => {
                        localArray.push(res.data);
                        if (localArray.length === limitPokemns) {
                            setPokemonDis(...[localArray])
                            setLoading(false);
                        }
                    })
                    .catch((err) => {
                        alert(`Something wrong... \n ${err.message}`);
                        setLoading(false);
                    });
            })
        }
    }, [pokemon]);

    const columns = [
        {
            key: 'avatarPokemon',
            title: 'Avatar Pokemon',
            with: '25%',
            render: function actions(record) {
                return <div>
                    <Avatar src={`${record.sprites.front_default}`} shape="square" size={150}
                            icon={<UserOutlined/>}/>
                </div>

            }
        },
        {
            key: 'namePokemon',
            title: 'Name Pokemon',
            with: '25%',
            render: function actions(record) {
                return <LinkText
                    tabIndex={0}
                    role="button"
                    className="ant-dropdown-link"
                    onClick={() => {
                        showModal(record);
                    }}>
                    {record.name}
                </LinkText>
            }
        },
        {
            key: 'typePokemon',
            title: 'Type Pokemon',
            with: '25%',
            render: function actions(record) {
                return <TypePokemonText>{record.types.map((element) => element.type).map(e => (`${e.name}; `))}</TypePokemonText>
            }
        },
    ];


    const getPokemonTitle = () => {
        if (namePokemon) {
            setLoading(true);
        }
        api
            .get(`/pokemon/${namePokemon.searchTitle}/`)
            .then((response) => {
                setPokemonDis([response.data]);
                setLoading(false);
            })
            .catch((err) => {
                alert(`Something wrong... \n ${err.message}`);
                setLoading(false);
            })
    };

    const showModal = (data) => {
        setCardPokemon(data);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleChangeSearchTitle = (e) => {
        setNamePokemon({...namePokemon, [e.target.name]: e.target.value})
    }

    return (
        <>{loading ? (
            <span>Loading</span>
        ) : (
            <CommonRow gutter={[20, 20]} align="top">
                <Col span={24}>
                    <Title style={{textAlign: 'center'}}>Pokemons</Title>
                </Col>
                <Col flex={1}>
                    <Input
                        value={namePokemon.searchTitle}
                        type="text"
                        name="searchTitle"
                        placeholder="Найти"
                        size="large"
                        style={{borderRadius: '4px'}}
                        onChange={handleChangeSearchTitle}
                    />
                </Col>
                <Col>
                    <Button
                        style={{borderRadius: '4px', marginRight: '5px'}}
                        size="large"
                        type="primary"
                        onClick={() => {
                            getPokemonTitle()
                        }}>
                        Search Name Pokemon
                    </Button>
                </Col>
                <RowForm>
                    <Table
                        columns={columns}
                        dataSource={pokemonDis}
                        expandable={{
                            expandedRowRender: record => <p
                                style={{margin: 0}}>Ability: {record.abilities.map((element) => element.ability).map(e => (e.name + '; '))}</p>,
                        }}
                        rowKey="id"
                    />
                </RowForm>
                {cardPokemon && <PokemonModal
                    onCancel={handleCancel}
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    cardPokemon={cardPokemon}
                />}
            </CommonRow>
        )}</>)
}