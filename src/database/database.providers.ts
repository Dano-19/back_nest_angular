import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: async(config: ConfigService)=>{
            const database= new DataSource({
                type:'postgres',
                host:config.get('HOST'),
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE')
            });
            await database.initialize();

            return database
        }  //Configuracion 1 proveedor de BDD
    }
]