import { DataSource } from "typeorm";
import { DataSourceOptions } from "typeorm/browser";

class ProjectContext extends DataSource {
    constructor(options: DataSourceOptions) {
        super(options)
    }
}

export default ProjectContext;