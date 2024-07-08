import { Module } from "@nestjs/common";
import { UniformIssueModule } from "./uniformIssue/uniformIssue.module";
import { DeliveryScheduleIssueModule } from "./deliveryScheduleIssue/deliveryScheduleIssue.module";
import { GoodsIssueModule } from "./goodsIssue/goodsIssue.module";
import { OtherIssueModule } from "./otherIssue/otherIssue.module";
import { EquipmentIssueModule } from "./equipmentIssue/equipmentIssue.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UniformIssueModule,
    DeliveryScheduleIssueModule,
    GoodsIssueModule,
    OtherIssueModule,
    EquipmentIssueModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
