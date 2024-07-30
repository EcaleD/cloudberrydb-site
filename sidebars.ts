import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want. 
 */
const sidebars: SidebarsConfig = {
  docsbars: [

    {
      type: 'category',
      label: 'Introduction',
      items: ['cbdb-overview','cbdb-architecture','cbdb-scenarios','cbdb-vs-gp-features']
     },

    {
      type: 'category',
      label: 'Deploy and Build',
      items: [
      {
        type: 'category',
        label: 'Build from Source Code',
        items: ['cbdb-macos-compile','cbdb-linux-compile']
      },
      {
        type: 'category',
        label: 'Deploy on Physical Machine',
        items: ['cbdb-op-software-hardware', 'cbdb-op-prepare-to-deploy', 'cbdb-op-deploy-guide','deploy-cbdb-with-single-node']
      }
     ]
    },

    {
      type: 'category',
      label: 'Load Data',
      items: ['data-loading/load-data-overview',
      {
        type: 'category',
        label: 'Load Data from Local Files',
        items: ['data-loading/load-data-using-copy', 'data-loading/load-data-using-gpfdist', 'data-loading/load-data-using-file-protocol','data-loading/load-data-using-gpload']
      },
      'data-loading/load-data-from-web-services']
    },

    {
      type: 'category',
      label: 'Create and Prepare',
      items: ['create-and-manage-database','start-and-stop-cbdb-database','connect-to-cbdb']
    },

    {
      type: 'category',
      label: 'Operate with Data',
      items: ['basic-query-syntax','create-and-manage-tables','create-and-manage-schemas','create-and-manage-views','create-and-manage-materialized-views','insert-update-delete-rows','work-with-transactions','transactional-concurrency-control','table-storage-models',

      {
        type: 'category',
        label: 'Advanced Analytics',
        items: ['advanced-analytics/postgis','advanced-analytics/directory-tables']
      }
      ]
     },

     {
       type: 'category',
       label: 'Optimize Query Performance',
       items: ['query-performance-overview', 'update-stats-using-analyze', 'use-unique-index-on-ao-tables', 'use-auto-materialized-view-to-answer-queries', 'use-incremental-materialized-view', 'parallel-create-ao-refresh-mv', 'parallel-query-execution', 'use-aggre-pushdown-to-speed-up-queries', 'use-index-scan-on-ao-tables', 'use-runtimefilter-to-optimize-queries']
     },

     {
       type: 'category',
       label: 'Security and Permission',
       items: ['manage-roles-and-privileges','configure-row-level-security-policy', 'protect-passwords','set-password-profile']
     },

     {
      type: 'category',
      label: 'Manage System',
      items: [
        {
        type: 'category',
        label: 'Backup and Restore',
        items: ['sys-admin/backup-and-restore-overview', 'sys-admin/perform-full-backup-and-restore', 'sys-admin/perform-incremental-backup-and-restore']
       },
        'sys-admin/configure-database-system', 'sys-admin/check-database-system', 'sys-admin/enable-coordinator-mirroring', 'sys-admin/recommended-maintenance-monitoring-tasks']
     },

    {
      type: 'category',
      label: 'References',
      items: [
      {
        type: 'category',
        label: 'SQL Statements',
        items: [
          'sql-stmts/sql-stmt-abort',
          'sql-stmts/sql-stmt-alter-database',
          'sql-stmts/sql-stmt-alter-rule',
          'sql-stmts/sql-stmt-alter-tablespace',
          'sql-stmts/sql-stmt-create-database',
          'sql-stmts/sql-stmt-create-index',
          'sql-stmts/sql-stmt-create-tablespace',
          'sql-stmts/sql-stmt-drop-database',
          'sql-stmts/sql-stmt-drop-extension',
          'sql-stmts/sql-stmt-drop-external-table',
          'sql-stmts/sql-stmt-drop-index',
          'sql-stmts/sql-stmt-drop-materialized-view',
          'sql-stmts/sql-stmt-drop-role',
          'sql-stmts/sql-stmt-drop-rule',
          'sql-stmts/sql-stmt-drop-schema',
          'sql-stmts/sql-stmt-drop-table',
          'sql-stmts/sql-stmt-drop-tablespace',
          'sql-stmts/sql-stmt-drop-type',
          'sql-stmts/sql-stmt-drop-user',
          'sql-stmts/sql-stmt-drop-view',
          'sql-stmts/sql-stmt-end',
          'sql-stmts/sql-stmt-rollback',
          'sql-stmts/sql-stmt-rollback-to-savepoint',
          'sql-stmts/sql-stmt-savepoint',
          'sql-stmts/sql-stmt-set-role',
          'sql-stmts/sql-stmt-set-transaction',
          'sql-stmts/sql-stmt-start-transaction',
          'sql-stmts/sql-stmt-truncate',
        ]
      },

        'data-types',

      {
        type: 'category',
        label: 'System Utilities',
        items: ['sys-utilities/db-util-createdb',
                'sys-utilities/db-util-gpdemo',
                'sys-utilities/db-util-gpstate',
                'sys-utilities/db-util-gpstop']
       },
     ]
    },

    {
      type: "category",
      label: "Releases",
      link: {
        type: "doc",
        id: "releases/index",
      },
      items: ['releases/release-1.5.4','releases/release-1.5.3','releases/release-1.5.2','releases/release-1.5.1', 'releases/release-1.5.0'],
    },
  ]
}

export default sidebars;
