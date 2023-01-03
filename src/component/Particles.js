import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from 'react';
import useMediaQuery from "./useMediaQuery";

const Particless = () => {
    let fream = useMediaQuery("(max-width: 1024px)")
  let  options = {

        "fullScreen": {
            enable: true,
            zIndex: -1
        },

        background: {
            color: "#051028"
        },

        interactivity: {
            events: {
                onClick: {
                    enable: true,
                        mode: "push",
                        },
                onHover: {
                    enable: true,
                        mode: "repulse",
                        },
                resize: true,
                    },
            modes: {
                push: {
                    quantity: 4,
                        },
                repulse: {
                    distance: 200,
                        duration: 1,
                        },
            },
        },
        particles: {
            color: {
                value: "aliceblue",
                    },
            links: {
                color: "#ffffff",
                    distance: 150,
                        enable: true,
                            opacity: 0.09,
                                width: 1,
                    },
            collisions: {
                enable: true,
                    },
            move: {
                directions: "none",
                    enable: true,
                        outModes: {
                            default: "bounce",
                        },
random: false,
    speed: 1,
        straight: false,
                    },
number: {
    density: {
        enable: false,
            area: 800,
                        },
    value: 150,
                    },
opacity: {
    value: 0.5,
                    },
shape: {
    type: "line",
                    },
size: {
    value: { min: 1, max: 5 },
},
                },
detectRetina: true,
            }
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    if (fream)
    {
        options = {

            "fullScreen": {
                enable: true,
                zIndex: -1
            },

            background: {
                color: "#051028"
            },

            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "aliceblue",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.09,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "line",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }
        
    }
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return <>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        /></>

}

export default Particless