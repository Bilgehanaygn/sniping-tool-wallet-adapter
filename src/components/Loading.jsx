import styled, {css, keyframes} from "styled-components";
import logo from '../assets/snipe-logo-alter.png';


const lighten = keyframes`
0% { opacity:0.5; }
50% { opacity:1; }
%100 { opacity:0.5; }
`;

const animation = props =>
css`
    ${lighten} 2s infinite linear;
`
const Logo = styled.div`
    opacity:0.5;
    z-index: 3;
    animation: ${animation};
    position: relative;
`;


const Loading = () => {

    const styles = {
        mainDiv: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    }
    
    
    return (
        <div style={styles.mainDiv}>
            <Logo>
                <img src={logo} alt="image1" style={{width:"60vh", height:"40vh",
                borderRadius: "5vh", zIndex:4
                }} />
            </Logo>
        </div>
    )
}

export default Loading;