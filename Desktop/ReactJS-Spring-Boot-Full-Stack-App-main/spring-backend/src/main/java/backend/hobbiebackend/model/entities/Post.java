package backend.hobbiebackend.model.entities;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String content;

    @ManyToOne
    @JoinColumn(name = "app_client_id")
    private AppClient appClient;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public AppClient getAppClient() {
        return appClient;
    }

    public void setAppClient(AppClient appClient) {
        this.appClient = appClient;
    }
}
