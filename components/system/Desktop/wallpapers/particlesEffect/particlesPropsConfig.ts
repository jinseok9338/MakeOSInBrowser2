import { IParticlesParams } from "react-particles-js";
import { Type } from "react-tsparticles";

export type particlePropsType = {
    simple: IParticlesParams,
    bubbles: IParticlesParams,
    snows: IParticlesParams,
    polygonMask: IParticlesParams,
    nightSky: IParticlesParams
}

const particleProps: particlePropsType = {
    simple: {
        particles: {
            number: {
                value: 50
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    },
    bubbles: {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    speed: 4,
                    size_min: 0.3
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "repulse"
                }
            },
            modes: {
                bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0
                },
                repulse: {
                    distance: 400,
                    duration: 4
                }
            }
        }
    },
    snows: {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: false
                }
            },
            size: {
                value: 10,
                random: true
            },
            move: {
                direction: "bottom",
                out_mode: "out"
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            events: {
                onclick: {
                    enable: true,
                    mode: "remove"
                }
            },
            modes: {
                remove: {
                    particles_nb: 10
                }
            }
        }
    },
    nightSky: {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 1500
                }
            },
            line_linked: {
                enable: true,
                opacity: 0.02
            },
            move: {
                direction: "right",
                speed: 0.05
            },
            size: {
                value: 1
            },
            opacity: {
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05
                }
            }
        },
        interactivity: {
            events: {
                onclick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                push: {
                    particles_nb: 1
                }
            }
        },
        retina_detect: true
    },
    polygonMask: {
        fps_limit: 28,
        particles: {
            collisions: {
                enable: false
            },
            number: {
                value: 200,
                density: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 30,
                opacity: 0.4
            },
            move: {
                speed: 1
            },
            opacity: {
                anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 1,
                    sync: false
                },
                value: 0.4
            }
        },
        polygon: {
            enable: true,
            scale: 0.5,
            type: "inline" as Type,
            move: {
                radius: 10
            },
            url: "/small-deer.2a0425af.svg",
            inline: {
                arrangement: "equidistant"
            },
            draw: {
                enable: true,
                stroke: {
                    color: "rgba(255, 255, 255, .2)"
                }
            }
        },
        retina_detect: false,
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    size: 6,
                    distance: 40
                }
            }
        }
    }
};

export default particleProps;