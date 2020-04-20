import Head from "next/head";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>cyalc.dev</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <main>
                <h1>cyalc.dev</h1>
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #272822;
                }

                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    color: #fff;
                    font-family: "Roboto Mono", monospace;
                    font-size: 3em;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
