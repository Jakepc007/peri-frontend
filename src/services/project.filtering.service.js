import axios from "axios";

function getProjectsByEngineerIDAndFilter(userId, params, page) {
    return axios
        .get(
            "https://peri-backend-6b9ca.ondigitalocean.app/api/projects/filter/getProjectsWithDesignEngineersByEngineerID/" +
                userId +
                "/page/" +
                page,
            { params }
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

const ProjectFilteringService = {
    getProjectsByEngineerIDAndFilter,
};

export default ProjectFilteringService;
