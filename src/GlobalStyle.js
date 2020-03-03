import { Global, css } from '@emotion/core';

export default function GlobalStyle() {
    return (
        <Global
            styles={css`
                #dev-tools {
                    position: fixed;
                    bottom: 0;
                    background: black;
                    opacity: 0.4;
                    color: white;
                    width: 100%;
                    padding: 20px;
                    height: 60px;
                    width: 60px;
                    transition: all 0.3s;
                    z-index: 999999;
                    overflow: auto;
                }

                #dev-tools:hover {
                    height: 100%;
                    width: 600px;
                    opacity: 0.9;
                }

                #dev-tools .tools {
                    display: none;
                }

                #dev-tools:hover .tools {
                    display: block;
                    overflow: auto;
                }

                #dev-tools:hover > div {
                    display: none;
                }
            `}
        />
    );
}
