import SocialLink from "../components/SocialLink";

const IndexPage = () => (
    <main>
        <h1>cyalc.dev</h1>
        <SocialLink
            name="linkedin"
            url="https://www.linkedin.com/in/cyalcinsoy/"
            iconPath="/linkedin.svg"
        />
        <SocialLink
            name="twitter"
            url="https://twitter.com/schalbo"
            iconPath="/twitter.svg"
        />
        <SocialLink
            name="github"
            url="https://github.com/cyalc"
            iconPath="/github.svg"
        />
        <style jsx>
            {`
                h1 {
                    font-family: Courier New;
                    font-size: 3em;
                    color: #ffffff;
                }
            `}
        </style>
        <style global jsx>{`
            body {
                background: #272822;
            }
        `}</style>
    </main>
);

export default IndexPage;
