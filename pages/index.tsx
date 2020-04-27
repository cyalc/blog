import SocialLink from "../components/SocialLink";
import Head from "next/head";

const IndexPage = () => (
    <div>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
                rel="stylesheet"
            ></link>
        </Head>
        <div className="headlineContainer">
            <div className="space"></div>
            <h1>cyalc.dev</h1>
            <div className="socialContainer">
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
            </div>
            <div className="space"></div>
            <style jsx>{`
                h1 {
                    font-family: "Roboto Mono", monospace;
                    font-size: 3em;
                    color: #ffffff;
                }
                .headlineContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                }
                .socialContainer {
                    padding: 0 0 16em 0;
                }
                .space {
                    flex: 1;
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    background-color: #272822;
                    margin: 0;
                }
            `}</style>
        </div>
    </div>
);

export default IndexPage;
