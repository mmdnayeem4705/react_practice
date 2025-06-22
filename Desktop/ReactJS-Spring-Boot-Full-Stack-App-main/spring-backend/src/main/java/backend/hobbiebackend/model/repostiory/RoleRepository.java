package backend.hobbiebackend.model.repostiory;

import java.util.Optional;

import backend.hobbiebackend.model.entities.UserRoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<UserRoleEntity, Long> {
    Optional<UserRoleEntity> findByRole(String role);
}
