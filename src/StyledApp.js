import styled from 'styled-components';


export const Wrapper = styled.div`
      display: block;
      height: 100%;
`;

export const Container = styled.div`
      display: block;
      height: 100%;
      width: 90%;
      margin: 0 auto;
`;

export const Header = styled.div`
      height: 10%;
      padding-top: 15px;
      border-bottom: 1px solid #acacac;
      padding-bottom: 15px;
`;

export const Main = styled.div`
      height: 90%;
`;

export const Title = styled.h5`
      display: block;
      margin: 0;
      padding: 0;
      text-align: center;
      line-height: 25px;
      height: 25px;
`;

export const Base = styled.div`
      height: 50px;
      line-height: 50px;
      text-align: center;
`;

export const List = styled.ul`
      height: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
`;

export const ListItem = styled.li`
      font-size: 30px;
      font-weight: normal;
      padding: 5px 25px;
      border-radius: 10px;
      margin-top: 10px;
      margin-left: 6px;
      text-align: center;
      flex-grow: 1;
      background: rgba(101, 134, 187, 0.85);
      list-style-type: none;
`;

export const ItemKey = styled.h6`
      display: block;
      margin: 0;
      padding: 0;
      text-align: center;
`;
export const ItemValue = styled.div``;

export const Img = styled.img.attrs(({ src }) => ({
      src,
}))`
      height: ${({ height }) => height || '100%'};
      width: ${({ width }) => width || '100%'};
      position: ${({ position }) => position || null};
      left: ${({ left }) => left || null};
      top: ${({ top }) => top || null};
`;
