import { configService } from '@/config/config.service';
import fs = require('fs');

const [migrations] = configService.getTypeOrmConfig();

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(
    [
      {
        ...migrations,
        entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
        migrations: [`${__dirname}/../migrations/**/*{.ts,.js}`],
      },
    ],
    null,
    2,
  ),
);
