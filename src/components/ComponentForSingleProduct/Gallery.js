import React from 'react';
import { useState } from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import '../CSS/Gallery.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import { MapInteractionCSS } from 'react-map-interaction';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: '20px 20px',
        borderRadius: '10px',
    },
}));

const TypographyStyled = withStyles(() => ({
    root: {
        fontWeight: 'bold',
        fontSize: '15px',
        marginLeft: '10px',
        color: 'rgb(53, 77, 88)',
    },
}))(Typography);

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const Gallery = ({ images = [{ url: '' }] }) => {
    const [main, setMain] = useState(images[0]);
    const [mainModal, setMainModal] = useState(images[0]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid>
            <Grid className='container__main__picture'>
                <img src={main.url} alt='main_picture' className='main__picture' style={{ backgroundColor: 'white' }} onClick={handleOpen} />
            </Grid>

            <Grid className='container__advise'>
                <TypographyStyled>Haz click para obtener una vista ampliada</TypographyStyled>
            </Grid>

            <div>
                <Grid container justify='center' item lg={12} md={12} sm={12} xs={12} className='mini__gallery'>
                    {images.map((image, index) => {
                        return <img className='mini__img' src={image.url} key={index} alt={image.filename} style={{ backgroundColor: 'white' }} onMouseOver={() => setMain(images[index])} />;
                    })}
                </Grid>
                <Modal
                    aria-labelledby='spring-modal-title'
                    aria-describedby='spring-modal-description'
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade id='container__modal' in={open}>
                        <div className={classes.paper}>
                            <div className='container__modal'>
                                <Grid container justify='space-between' className='container__titles'>
                                    <Typography className='titles'>Imágenes</Typography>
                                    <CloseIcon className='close__icon' onClick={handleClose} />
                                </Grid>
                                <Divider />
                                <Grid className='container__gallery' container justify='center'>
                                    <Grid>
                                        <MapInteractionCSS>
                                            <img src={mainModal.url} alt='main__picture' className='main__modal__picture' style={{ backgroundColor: 'white' }} />
                                        </MapInteractionCSS>
                                    </Grid>
                                    <Grid className='modal__gallery'>
                                        <Grid className='container__modal__gallery'>
                                            {images.map((image, index) => {
                                                return (
                                                    <img
                                                        className={`${image.url === mainModal.url ? 'mini__img__modal  active' : 'mini__img__modal'}`}
                                                        src={image.url}
                                                        key={index}
                                                        alt='mini__picture'
                                                        style={{ backgroundColor: 'white' }}
                                                        onClick={() => setMainModal(images[index])}
                                                    />
                                                );
                                            })}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid className='container__advise2'>
                                    <TypographyStyled>Utiliza tu scroll para aumentar o disminuir la imagen</TypographyStyled>
                                </Grid>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </Grid>
    );
};
