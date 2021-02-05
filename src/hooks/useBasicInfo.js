import { useStaticQuery, graphql } from 'gatsby';

const useBasicInfo = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query Developer {
        dataJson {
          id
          basicInfo {
            name
            field
            logo
            website
            introduction
            location {
              state
              country
            }
            socials {
              network
              url
            }
          }
        }
      }
    `
  );
  return dataJson.basicInfo;
};

export default useBasicInfo;
