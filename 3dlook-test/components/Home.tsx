import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {selectTodoList} from "../store/reducers/taskSlice";
import {useRouter} from "next/router";
import {useEffect} from "react";
import { fetchTodoAsyncAction } from "../store/actions/todoActions";
import {IonApp, IonButton, IonContent, IonItem, IonInput} from "@ionic/react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useTaskActions } from '../hooks'

const Home: NextPage = () => {
    const todoList = useSelector(selectTodoList);
    const router = useRouter()
    const {finishTask, removeTask, fetchTodoAsyncAction} = useTaskActions()
    const { userId } = router.query
    useEffect(()=>{
        fetchTodoAsyncAction()
    }, [])
    return (
        <IonApp>
            <IonContent className="ion-padding">
                <div className={styles.container}>
                    <Head>
                        <title>3d look test task </title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                <main>
                    <h1 className={styles.title}>
                        3d look test task
                    </h1>
                        {todoList.map((elem)=>{
                            return (
                                <div className={`${elem.completed ? styles.done: null}`}>
                                    <div className={styles.inputRow}>
                                        <IonInput value={elem.title} style={{width:'100%'}} ></IonInput>
                                        <IonButton onClick={()=>finishTask(elem.id)}>Done</IonButton>
                                        <IonButton onClick={()=>removeTask(elem.id)}>Remove</IonButton>
                                    </div>
                                </div>
                                )
                        })}
                </main>

            <style jsx>{`
                main {
                  padding: 5rem 6rem;
                  //flex: 1;
                  //display: flex;
                  //flex-direction: column;
                  //justify-content: center;
                  //align-items: center;
                }
              `}</style>

            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                  box-sizing: border-box;
                }
              `}</style>
            </div>
        </IonContent>
    </IonApp>
)
}
export default Home