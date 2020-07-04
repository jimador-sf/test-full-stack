import React, { useRef, useState, useCallback } from 'react';

import styled from '@emotion/styled';
import { Grid, Cell } from '../util/grid';
import UserButton from '../user-button/user-button';
import { inputCss, inputLabelCss, formCss, inputControlCss, headerText } from './user-edit-modal.styles';
import { useForm } from 'react-hook-form';
import 'mapbox-gl/dist/mapbox-gl.css';
import { InteractiveMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import Geocoder from 'react-map-gl-geocoder';

// TODO - Configuration
const TOKEN = `pk.eyJ1IjoiamR1bm5hbSIsImEiOiJja2M3dDIzMTkwNnZ2MnBwcTVkbGw0NW4wIn0.gWACb0ktQ7RGC8oOXHiuNQ`;

const geolocateStyle = {
  borderRadius: '8px'
};

/* eslint-disable-next-line */
export interface UserEditModalProps {
}

const Input = styled.input(inputCss);

const InputLabel = styled.label(inputLabelCss);

const Form = styled.form(formCss);

const InputControl = styled.div(inputControlCss);

const StyledUserEditModal = styled.div`
  width: 1328px;
  height: 725px;
  padding: 65px;
`;

const HeaderText = styled.text(headerText);

export const UserEditModal = (props: UserEditModalProps) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const _me = useRef();

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  const [searchResultLayer, setSearchResultLayer] = useState({});

  const handleViewportChange = useCallback(updated => {
    setViewport({
      ...viewport, ...updated
    });
  }, [viewport]);

  const handleGeocoderViewportChange = useCallback(updated => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...updated,
      ...geocoderDefaultOverrides
    });
  }, [viewport, handleViewportChange]);

  const handleOnResult = useCallback(event => {
    setSearchResultLayer({
      searchResultLayer: new DeckGL.GeoJsonLayer({
        id: 'search-result',
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  }, [searchResultLayer, viewport]);


  return (
    <StyledUserEditModal>
      <Grid
        gap={'20px'}
        columns={'582px auto 1fr'}
        rows={'171px 337px 217px'}
        areas={[
          'header header  header',
          'map    form    form  ',
          'footer save    cancel'
        ]}
      >
        <Cell area="header" center middle>
          <HeaderText>Edit User</HeaderText>
        </Cell>
        <Cell area="map">
          <InteractiveMap
            ref={_me}
            {...viewport}
            mapStyle={'mapbox://styles/mapbox/streets-v9'}
            width='100%'
            height='100%'
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={TOKEN}
          >
            <Geocoder
              mapRef={_me}
              onResult={handleOnResult}
              onViewportChange={handleGeocoderViewportChange}
              mapboxApiAccessToken={TOKEN}
              position='top-left'
            />
            <DeckGL {...viewport} layers={[searchResultLayer]}/>
          </InteractiveMap>
        </Cell>
        <Cell area="form">
          {/*TODO: form component*/}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputControl>
              <InputLabel htmlFor={'name'}>Name</InputLabel>
              <br/>
              <Input type="text"
                     name="Name"
                     id={'name'}
                     ref={register({ required: true, max: 100, min: 1, maxLength: 100 })}
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'location'}>Location</InputLabel>
              <br/>
              <Input type="text"
                     name="Location"
                     id={'location'}
                     ref={register({ required: true, max: 500, min: 1, maxLength: 500 })}
              />
            </InputControl>
            <InputControl>
              <InputLabel htmlFor={'description'}>Description</InputLabel>
              <br/>
              <Input type="text"
                     name="Description"
                     id={'description'}
                     ref={register({ required: true, max: 4000, min: 1, maxLength: 4000 })}/>
            </InputControl>
          </Form>
        </Cell>
        <Cell area={'save'} middle style={{ width: '88%', margin: '0px auto' }}>
          <UserButton action={() => alert('ouch')} buttonText={'Save'}/>
        </Cell>
        <Cell area={'cancel'} middle style={{ width: '66%', margin: '0px auto' }}>
          <UserButton action={() => alert('ouch')} buttonText={'Cancel'}/>
        </Cell>
      </Grid>
    </StyledUserEditModal>
  );
};

export default UserEditModal;
