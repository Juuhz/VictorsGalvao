import styled from 'styled-components/native';

export const Wrapper = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #F5FCFF;
    text-align: center;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-weight: 100;
    margin-bottom: 20px;
`;

export const BtnStart = styled.TouchableOpacity`
    padding: 13px 30px;
    border: 1px solid #4F628E;
`;

export const BtnText = styled.Text`
    color: #4F628E;
    font-size: 16px;
`;

export default Wrapper;