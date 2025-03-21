import React from "react";
import Head from "next/head";
import db from './api/db';			// прикольно типо можно доступ получить при первом рендере гы =)
import Table from '../component/UserList';
import { UserData } from '../component/type';


// можно так получить, но так не интересно же
export async function getServerSideProps({ req }) {
	return {
		props: {
			data: db
		}
	}
}



export default function Home({ data }: { data: UserData[] }) {
	const [state, setState] = React.useState();
	//console.log(process);    // полифил какойто хм 


	React.useEffect(() => {
		setTimeout(async ()=> {
			const response = await fetch('/api/test');
			const result = await response.json();
			setState(result.data);

			console.log(global)
		}, 1000);
	}, []);


	//? сделать isLoad (пока данных нет какую то херню показать юзверю)
	return (
		<div style={{height:'100vh'}}>
			<Head>
				<title>Главная страница</title>
				<meta name="description" content="dead and rooooooook" />
			</Head>


			<div className="root">
				{ state &&
					<Table 
						items={state}
					/>
				}
			</div>
		</div>
	);
}