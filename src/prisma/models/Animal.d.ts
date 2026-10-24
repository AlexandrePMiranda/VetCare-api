import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnimalModel = runtime.Types.Result.DefaultSelection<Prisma.$AnimalPayload>;
export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null;
    _min: AnimalMinAggregateOutputType | null;
    _max: AnimalMaxAggregateOutputType | null;
};
export type AnimalMinAggregateOutputType = {
    id: string | null;
    species: string | null;
    breed: string | null;
    sex: $Enums.sex | null;
    birth: Date | null;
    tutorId: string | null;
};
export type AnimalMaxAggregateOutputType = {
    id: string | null;
    species: string | null;
    breed: string | null;
    sex: $Enums.sex | null;
    birth: Date | null;
    tutorId: string | null;
};
export type AnimalCountAggregateOutputType = {
    id: number;
    species: number;
    breed: number;
    sex: number;
    birth: number;
    tutorId: number;
    _all: number;
};
export type AnimalMinAggregateInputType = {
    id?: true;
    species?: true;
    breed?: true;
    sex?: true;
    birth?: true;
    tutorId?: true;
};
export type AnimalMaxAggregateInputType = {
    id?: true;
    species?: true;
    breed?: true;
    sex?: true;
    birth?: true;
    tutorId?: true;
};
export type AnimalCountAggregateInputType = {
    id?: true;
    species?: true;
    breed?: true;
    sex?: true;
    birth?: true;
    tutorId?: true;
    _all?: true;
};
export type AnimalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnimalCountAggregateInputType;
    _min?: AnimalMinAggregateInputType;
    _max?: AnimalMaxAggregateInputType;
};
export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
    [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnimal[P]> : Prisma.GetScalarType<T[P], AggregateAnimal[P]>;
};
export type AnimalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithAggregationInput | Prisma.AnimalOrderByWithAggregationInput[];
    by: Prisma.AnimalScalarFieldEnum[] | Prisma.AnimalScalarFieldEnum;
    having?: Prisma.AnimalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnimalCountAggregateInputType | true;
    _min?: AnimalMinAggregateInputType;
    _max?: AnimalMaxAggregateInputType;
};
export type AnimalGroupByOutputType = {
    id: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date;
    tutorId: string;
    _count: AnimalCountAggregateOutputType | null;
    _min: AnimalMinAggregateOutputType | null;
    _max: AnimalMaxAggregateOutputType | null;
};
export type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnimalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnimalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnimalGroupByOutputType[P]>;
}>>;
export type AnimalWhereInput = {
    AND?: Prisma.AnimalWhereInput | Prisma.AnimalWhereInput[];
    OR?: Prisma.AnimalWhereInput[];
    NOT?: Prisma.AnimalWhereInput | Prisma.AnimalWhereInput[];
    id?: Prisma.StringFilter<"Animal"> | string;
    species?: Prisma.StringFilter<"Animal"> | string;
    breed?: Prisma.StringFilter<"Animal"> | string;
    sex?: Prisma.EnumsexFilter<"Animal"> | $Enums.sex;
    birth?: Prisma.DateTimeFilter<"Animal"> | Date | string;
    tutorId?: Prisma.StringFilter<"Animal"> | string;
    tutor?: Prisma.XOR<Prisma.TutorScalarRelationFilter, Prisma.TutorWhereInput>;
};
export type AnimalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    birth?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    tutor?: Prisma.TutorOrderByWithRelationInput;
};
export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tutorId?: string;
    AND?: Prisma.AnimalWhereInput | Prisma.AnimalWhereInput[];
    OR?: Prisma.AnimalWhereInput[];
    NOT?: Prisma.AnimalWhereInput | Prisma.AnimalWhereInput[];
    species?: Prisma.StringFilter<"Animal"> | string;
    breed?: Prisma.StringFilter<"Animal"> | string;
    sex?: Prisma.EnumsexFilter<"Animal"> | $Enums.sex;
    birth?: Prisma.DateTimeFilter<"Animal"> | Date | string;
    tutor?: Prisma.XOR<Prisma.TutorScalarRelationFilter, Prisma.TutorWhereInput>;
}, "id" | "tutorId">;
export type AnimalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    birth?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
    _count?: Prisma.AnimalCountOrderByAggregateInput;
    _max?: Prisma.AnimalMaxOrderByAggregateInput;
    _min?: Prisma.AnimalMinOrderByAggregateInput;
};
export type AnimalScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnimalScalarWhereWithAggregatesInput | Prisma.AnimalScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnimalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnimalScalarWhereWithAggregatesInput | Prisma.AnimalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Animal"> | string;
    species?: Prisma.StringWithAggregatesFilter<"Animal"> | string;
    breed?: Prisma.StringWithAggregatesFilter<"Animal"> | string;
    sex?: Prisma.EnumsexWithAggregatesFilter<"Animal"> | $Enums.sex;
    birth?: Prisma.DateTimeWithAggregatesFilter<"Animal"> | Date | string;
    tutorId?: Prisma.StringWithAggregatesFilter<"Animal"> | string;
};
export type AnimalCreateInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
    tutor: Prisma.TutorCreateNestedOneWithoutAnimalsInput;
};
export type AnimalUncheckedCreateInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
    tutorId: string;
};
export type AnimalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor?: Prisma.TutorUpdateOneRequiredWithoutAnimalsNestedInput;
};
export type AnimalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnimalCreateManyInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
    tutorId: string;
};
export type AnimalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnimalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    birth?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
};
export type AnimalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    birth?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
};
export type AnimalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    sex?: Prisma.SortOrder;
    birth?: Prisma.SortOrder;
    tutorId?: Prisma.SortOrder;
};
export type AnimalListRelationFilter = {
    every?: Prisma.AnimalWhereInput;
    some?: Prisma.AnimalWhereInput;
    none?: Prisma.AnimalWhereInput;
};
export type AnimalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumsexFieldUpdateOperationsInput = {
    set?: $Enums.sex;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type AnimalCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput> | Prisma.AnimalCreateWithoutTutorInput[] | Prisma.AnimalUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.AnimalCreateOrConnectWithoutTutorInput | Prisma.AnimalCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.AnimalCreateManyTutorInputEnvelope;
    connect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
};
export type AnimalUncheckedCreateNestedManyWithoutTutorInput = {
    create?: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput> | Prisma.AnimalCreateWithoutTutorInput[] | Prisma.AnimalUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.AnimalCreateOrConnectWithoutTutorInput | Prisma.AnimalCreateOrConnectWithoutTutorInput[];
    createMany?: Prisma.AnimalCreateManyTutorInputEnvelope;
    connect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
};
export type AnimalUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput> | Prisma.AnimalCreateWithoutTutorInput[] | Prisma.AnimalUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.AnimalCreateOrConnectWithoutTutorInput | Prisma.AnimalCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.AnimalUpsertWithWhereUniqueWithoutTutorInput | Prisma.AnimalUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.AnimalCreateManyTutorInputEnvelope;
    set?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    disconnect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    delete?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    connect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    update?: Prisma.AnimalUpdateWithWhereUniqueWithoutTutorInput | Prisma.AnimalUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.AnimalUpdateManyWithWhereWithoutTutorInput | Prisma.AnimalUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.AnimalScalarWhereInput | Prisma.AnimalScalarWhereInput[];
};
export type AnimalUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput> | Prisma.AnimalCreateWithoutTutorInput[] | Prisma.AnimalUncheckedCreateWithoutTutorInput[];
    connectOrCreate?: Prisma.AnimalCreateOrConnectWithoutTutorInput | Prisma.AnimalCreateOrConnectWithoutTutorInput[];
    upsert?: Prisma.AnimalUpsertWithWhereUniqueWithoutTutorInput | Prisma.AnimalUpsertWithWhereUniqueWithoutTutorInput[];
    createMany?: Prisma.AnimalCreateManyTutorInputEnvelope;
    set?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    disconnect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    delete?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    connect?: Prisma.AnimalWhereUniqueInput | Prisma.AnimalWhereUniqueInput[];
    update?: Prisma.AnimalUpdateWithWhereUniqueWithoutTutorInput | Prisma.AnimalUpdateWithWhereUniqueWithoutTutorInput[];
    updateMany?: Prisma.AnimalUpdateManyWithWhereWithoutTutorInput | Prisma.AnimalUpdateManyWithWhereWithoutTutorInput[];
    deleteMany?: Prisma.AnimalScalarWhereInput | Prisma.AnimalScalarWhereInput[];
};
export type AnimalCreateWithoutTutorInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
};
export type AnimalUncheckedCreateWithoutTutorInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
};
export type AnimalCreateOrConnectWithoutTutorInput = {
    where: Prisma.AnimalWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput>;
};
export type AnimalCreateManyTutorInputEnvelope = {
    data: Prisma.AnimalCreateManyTutorInput | Prisma.AnimalCreateManyTutorInput[];
    skipDuplicates?: boolean;
};
export type AnimalUpsertWithWhereUniqueWithoutTutorInput = {
    where: Prisma.AnimalWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnimalUpdateWithoutTutorInput, Prisma.AnimalUncheckedUpdateWithoutTutorInput>;
    create: Prisma.XOR<Prisma.AnimalCreateWithoutTutorInput, Prisma.AnimalUncheckedCreateWithoutTutorInput>;
};
export type AnimalUpdateWithWhereUniqueWithoutTutorInput = {
    where: Prisma.AnimalWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnimalUpdateWithoutTutorInput, Prisma.AnimalUncheckedUpdateWithoutTutorInput>;
};
export type AnimalUpdateManyWithWhereWithoutTutorInput = {
    where: Prisma.AnimalScalarWhereInput;
    data: Prisma.XOR<Prisma.AnimalUpdateManyMutationInput, Prisma.AnimalUncheckedUpdateManyWithoutTutorInput>;
};
export type AnimalScalarWhereInput = {
    AND?: Prisma.AnimalScalarWhereInput | Prisma.AnimalScalarWhereInput[];
    OR?: Prisma.AnimalScalarWhereInput[];
    NOT?: Prisma.AnimalScalarWhereInput | Prisma.AnimalScalarWhereInput[];
    id?: Prisma.StringFilter<"Animal"> | string;
    species?: Prisma.StringFilter<"Animal"> | string;
    breed?: Prisma.StringFilter<"Animal"> | string;
    sex?: Prisma.EnumsexFilter<"Animal"> | $Enums.sex;
    birth?: Prisma.DateTimeFilter<"Animal"> | Date | string;
    tutorId?: Prisma.StringFilter<"Animal"> | string;
};
export type AnimalCreateManyTutorInput = {
    id?: string;
    species: string;
    breed: string;
    sex: $Enums.sex;
    birth: Date | string;
};
export type AnimalUpdateWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimalUncheckedUpdateWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimalUncheckedUpdateManyWithoutTutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    sex?: Prisma.EnumsexFieldUpdateOperationsInput | $Enums.sex;
    birth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    species?: boolean;
    breed?: boolean;
    sex?: boolean;
    birth?: boolean;
    tutorId?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animal"]>;
export type AnimalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    species?: boolean;
    breed?: boolean;
    sex?: boolean;
    birth?: boolean;
    tutorId?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animal"]>;
export type AnimalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    species?: boolean;
    breed?: boolean;
    sex?: boolean;
    birth?: boolean;
    tutorId?: boolean;
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["animal"]>;
export type AnimalSelectScalar = {
    id?: boolean;
    species?: boolean;
    breed?: boolean;
    sex?: boolean;
    birth?: boolean;
    tutorId?: boolean;
};
export type AnimalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "species" | "breed" | "sex" | "birth" | "tutorId", ExtArgs["result"]["animal"]>;
export type AnimalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
};
export type AnimalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
};
export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor?: boolean | Prisma.TutorDefaultArgs<ExtArgs>;
};
export type $AnimalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Animal";
    objects: {
        tutor: Prisma.$TutorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        species: string;
        breed: string;
        sex: $Enums.sex;
        birth: Date;
        tutorId: string;
    }, ExtArgs["result"]["animal"]>;
    composites: {};
};
export type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnimalPayload, S>;
export type AnimalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnimalCountAggregateInputType | true;
};
export interface AnimalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Animal'];
        meta: {
            name: 'Animal';
        };
    };
    findUnique<T extends AnimalFindUniqueArgs>(args: Prisma.SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnimalFindFirstArgs>(args?: Prisma.SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnimalFindManyArgs>(args?: Prisma.SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnimalCreateArgs>(args: Prisma.SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnimalCreateManyArgs>(args?: Prisma.SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnimalDeleteArgs>(args: Prisma.SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnimalUpdateArgs>(args: Prisma.SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnimalDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnimalUpdateManyArgs>(args: Prisma.SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnimalUpsertArgs>(args: Prisma.SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma.Prisma__AnimalClient<runtime.Types.Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnimalCountArgs>(args?: Prisma.Subset<T, AnimalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnimalCountAggregateOutputType> : number>;
    aggregate<T extends AnimalAggregateArgs>(args: Prisma.Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>;
    groupBy<T extends AnimalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnimalGroupByArgs['orderBy'];
    } : {
        orderBy?: AnimalGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnimalFieldRefs;
}
export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tutor<T extends Prisma.TutorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TutorDefaultArgs<ExtArgs>>): Prisma.Prisma__TutorClient<runtime.Types.Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnimalFieldRefs {
    readonly id: Prisma.FieldRef<"Animal", 'String'>;
    readonly species: Prisma.FieldRef<"Animal", 'String'>;
    readonly breed: Prisma.FieldRef<"Animal", 'String'>;
    readonly sex: Prisma.FieldRef<"Animal", 'sex'>;
    readonly birth: Prisma.FieldRef<"Animal", 'DateTime'>;
    readonly tutorId: Prisma.FieldRef<"Animal", 'String'>;
}
export type AnimalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where: Prisma.AnimalWhereUniqueInput;
};
export type AnimalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where: Prisma.AnimalWhereUniqueInput;
};
export type AnimalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimalScalarFieldEnum | Prisma.AnimalScalarFieldEnum[];
};
export type AnimalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimalScalarFieldEnum | Prisma.AnimalScalarFieldEnum[];
};
export type AnimalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where?: Prisma.AnimalWhereInput;
    orderBy?: Prisma.AnimalOrderByWithRelationInput | Prisma.AnimalOrderByWithRelationInput[];
    cursor?: Prisma.AnimalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimalScalarFieldEnum | Prisma.AnimalScalarFieldEnum[];
};
export type AnimalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimalCreateInput, Prisma.AnimalUncheckedCreateInput>;
};
export type AnimalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnimalCreateManyInput | Prisma.AnimalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnimalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    data: Prisma.AnimalCreateManyInput | Prisma.AnimalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnimalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnimalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimalUpdateInput, Prisma.AnimalUncheckedUpdateInput>;
    where: Prisma.AnimalWhereUniqueInput;
};
export type AnimalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnimalUpdateManyMutationInput, Prisma.AnimalUncheckedUpdateManyInput>;
    where?: Prisma.AnimalWhereInput;
    limit?: number;
};
export type AnimalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimalUpdateManyMutationInput, Prisma.AnimalUncheckedUpdateManyInput>;
    where?: Prisma.AnimalWhereInput;
    limit?: number;
    include?: Prisma.AnimalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnimalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where: Prisma.AnimalWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimalCreateInput, Prisma.AnimalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnimalUpdateInput, Prisma.AnimalUncheckedUpdateInput>;
};
export type AnimalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
    where: Prisma.AnimalWhereUniqueInput;
};
export type AnimalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimalWhereInput;
    limit?: number;
};
export type AnimalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimalSelect<ExtArgs> | null;
    omit?: Prisma.AnimalOmit<ExtArgs> | null;
    include?: Prisma.AnimalInclude<ExtArgs> | null;
};
