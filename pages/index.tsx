import SocialLink from "../components/SocialLink";

const IndexPage = () => (
    <main>
        <SocialLink
            name="linkedin"
            url="https://linkedin.com"
            iconPath="/linkedin.svg"
        />
        <style jsx>{``}</style>
        <style global jsx>{`
            body {
                background: #272822;
            }
        `}</style>
    </main>
);

export default IndexPage;
