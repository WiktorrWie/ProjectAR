import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg} from "@ionic/react";
import "./PostListItem.css";


export default function PostListItem({ post }) {
    return (
        <IonCard className="post-list-item">
            <IonImg className="post-img" src={post.image} />
            <IonCardHeader>
                <IonCardTitle>
                    <h4>{post.title}</h4>
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{post.body}</IonCardContent>
        </IonCard>
    );
}
