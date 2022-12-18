type Props = {
  name: string;
  url: string;
  iconPath: string;
};

const SocialLink: React.FunctionComponent<Props> = ({
  name,
  url,
  iconPath,
}) => (
  <div className="socialLink">
    <a rel="me" href={url}>
      <img src={iconPath} alt={name} width="48" height="48" />
    </a>
    <style jsx>{`
      .socialLink {
        display: inline-block;
        padding: 16px;
        background: none;
        border: 0px;
        cursor: pointer;
        margin: 13px;
      }

      .socialLink:hover {
        background: black;
        color: white;
        border-radius: 8px;
      }
    `}</style>
  </div>
);

export default SocialLink;
